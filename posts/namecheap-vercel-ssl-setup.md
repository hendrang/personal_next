---
title: 'Setting up SSL Namecheap-Vercel'
subtitle: 'Steps to set this personal site using SSL'
date: '2020-11-10'
category: 'code'
---

##### Background
I decided to buy my domain from Namecheap. While learning React, the tutorial promotes Vercel. Vercel treats React application as its first class citizen, but what actually got me is the fact that it's free for personal use. Since Vercel is free, I have little allowance for me to try SSL on NameCheap. I know with just domain name, I can do redirect (masked, unmasked, or permanent). For those who don't know how to redirect: Namecheap or your favorite domain registrar should have DNS section (and probably Advanced DNS section). If you look closely, you should see options to redirect. Simply add your source URL (for my case hendrang.me) amd Destination URL (your host app url)

##### How-to

My goal here is to set it up with SSL, so whenever users visit hendrang.me, they wil not see "Not Secured" next to the URL. I spent good amount of time online trying to see how I can do this. Personally, I could not find clear answers on one site. After gathering information here and there and some trial and errors, I finally got it working.

Here are the steps:
1. Before you create certificate on namecheap, make sure you setup the email redirect (under DNS section). I decided to add "admin". This means if someone send email to admin@hendrang.me, it will get redirected to my personal email.
2. Test step 1 first after setup by sending test email
3. Create the certificate. Namecheap has good documentation on how to do this. With step 1 and 2, I basically make you go through the email route. <a target="_blank" href="https://www.namecheap.com/support/knowledgebase/article.aspx/804/69/ssl-certificate-activation-and-installation-for-domains-hosted-on-namecheap-hosting-servers">Here's the link.</a>
4. Once you create your certificate and verify using email, you can download the certificate. When you download you will get a zip file
5. I use GitHub for my React code repository. Vercel does make it really easy to hook up your github project. It is so easy that no need for further tutorial/explanation.
6. Once you have your React repo connected with Vercel, Vercel will provide you with its own URL for your deployed site (ex. mysite-xy123.vercel.app)
7. In React, public folder is used for (obviously) public access files. Create a folder named ".well-known/pki-validation" and unzip the content from step #4 here. Make sure that .well-known folder is under public folder.
8. Push the newly added folder to GitHub. If you connect your GitHub correctly, Vercel will detect and automatically do the continuous deployment
9. Now let's switch to Vercel. On Vercel, click on your project name. On the next page you should see "View Domains" button. Click that button
10. On Domains section, you will need to add the domain name you bought from Namecheap (ex. hendrang.me)
11. Once added, you should expect invalid configuration. I decided to go with Apex domain route. When you click Edit on the newly created domain on Vercel, you should see your Apex domain value (it's the A-record). It has "A", "@", and IP address. Take note of the values.
12. Go back to NameCheap and this time go to your Advanced DNS. Under Host Record, add that Apex domain
13. Give it some time for Vercel to detect and verify your SSL. 
14. Now if you visit your site using your Namecheap domain, you should not see "Not Secured" next to your URL anymore. 




<p style='text-align: right;'><em>Cabs duls - HN</em></p>
