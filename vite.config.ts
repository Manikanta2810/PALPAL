import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'boringbros-email-auth-dev',
        configureServer(server) {
          server.middlewares.use('/api/auth/send-email', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => { body += chunk; });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body);
                  console.log('\n=============================================');
                  console.log(`📨 [BORINGBROS EMAIL DISPATCHER]`);
                  console.log(`To: ${data.email}`);
                  console.log(`Type: ${data.type || 'signin'}`);
                  console.log(`6-Digit OTP Code: ${data.code}`);
                  console.log(`Magic URL: ${data.magicUrl}`);

                  // If real RESEND_API_KEY is provided in .env, send actual email!
                  let resendResult = null;
                  if (env.RESEND_API_KEY) {
                    try {
                      const resendRes = await fetch('https://api.resend.com/emails', {
                        method: 'POST',
                        headers: {
                          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          from: env.EMAIL_FROM || 'BoringBros <onboarding@resend.dev>',
                          to: [data.email],
                          subject: `Your BoringBros verification code: ${data.code}`,
                          html: `
                            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 28px; border: 1.5px solid #0B0B0C; border-radius: 16px; background-color: #F3F0E8; color: #0B0B0C;">
                              <div style="font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #B45309; margin-bottom: 8px;">BORINGBROS AUTH</div>
                              <h2 style="margin: 0 0 12px; font-size: 24px; font-weight: 800; color: #0B0B0C;">Your Sign-In Verification Code</h2>
                              <p style="font-size: 15px; line-height: 1.5; color: #5f5c55; margin-bottom: 24px;">Enter the 6-digit code below to access your BoringBros account, notes, and learning streak:</p>
                              
                              <div style="font-family: monospace; font-size: 34px; font-weight: 800; letter-spacing: 6px; padding: 18px 24px; background: #FFFFFF; border: 2px solid #0B0B0C; border-radius: 12px; text-align: center; color: #0B0B0C; margin-bottom: 24px;">
                                ${data.code}
                              </div>
                              
                              ${data.magicUrl ? `
                                <div style="text-align: center; margin-bottom: 24px;">
                                  <a href="${data.magicUrl}" style="display: inline-block; padding: 12px 24px; background: #FCAC04; color: #0B0B0C; font-weight: 800; text-decoration: none; border-radius: 8px; font-size: 14px; border: 1.5px solid #0B0B0C;">
                                    Sign In with 1-Click Magic Link →
                                  </a>
                                </div>
                              ` : ''}

                              <div style="border-top: 1px solid #DCD8CC; padding-top: 16px; font-size: 12px; color: #5f5c55; line-height: 1.4;">
                                This code will expire in 10 minutes. If you did not request this email, no further action is required.
                              </div>
                            </div>
                          `
                        })
                      });
                      resendResult = await resendRes.json();
                      console.log(`[Resend Live Dispatch Result]:`, resendResult);
                    } catch (dispatchErr) {
                      console.error(`[Resend Dispatch Failed]:`, dispatchErr);
                    }
                  } else {
                    console.log(`[Notice] To send real emails to inboxes, add RESEND_API_KEY in .env`);
                  }

                  console.log('=============================================\n');
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({
                    success: true,
                    message: `Email dispatched to ${data.email}`,
                    hasResendKey: !!env.RESEND_API_KEY,
                    resend: resendResult
                  }));
                } catch {
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: false, error: 'Malformed JSON payload' }));
                }
              });
            } else {
              res.writeHead(405, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Method not allowed' }));
            }
          });
        }
      }
    ],
    server: {
      port: 5173,
      host: true,
    },
  };
});
