# Unique Angle Architecture & Interior Design

A premium, high-end static website built for Unique Angle Architecture & Interior Design. Designed with a luxury aesthetic, fast loading times, and SEO best practices.

## Included Features
- HTML5, CSS3, and minimal Vanilla JavaScript
- Bootstrap 5 for responsive layout
- Modern typography and premium color palette
- Scroll animations and interactive element hover states
- fully responsive on all devices

## Deployment to GitHub Pages
1. Create a new repository on GitHub.
2. Push all the contents of this folder (`unique-angle-demo`) to the main branch.
3. Go to your repository **Settings** > **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/root` folder, then click **Save**.
6. Your website will be live in a few minutes at `https://[username].github.io/[repo-name]/`.

## How to Replace Demo Images
Currently, the website uses high-quality placeholder images from Unsplash. To use your real project images:
1. Place your real images inside the `images/` directory.
2. Open `index.html`.
3. Locate the `<img>` tags (e.g., `<img src="https://images.unsplash..." />`).
4. Replace the `src` attribute with the local path to your image (e.g., `src="images/living-room.jpg"`).
5. For the hero background image, open `css/style.css`, find `.hero-bg`, and update the `background` property URL.

## Connecting a Custom Domain
Once deployed to GitHub Pages:
1. Go to repository **Settings** > **Pages**.
2. Scroll to **Custom domain** and enter your domain name (e.g., `www.uniqueangle.com`).
3. Click **Save**.
4. In your domain registrar's DNS settings, add a `CNAME` record pointing to your `[username].github.io` and `A` records for GitHub Pages IPs.

## Integrating a Real Contact Form
The current contact form is frontend-only and will not send emails. To make it functional without a backend, you can use a service like **Web3Forms**:

1. Sign up at [Web3Forms](https://web3forms.com/).
2. Get your Access Key or Endpoint URL.
3. Update the `<form>` tag in `index.html` to include the `action` and `method` attributes:
```html
<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    <!-- Rest of the form inputs -->
```
4. Remove the `onsubmit` JavaScript event handler from the `<form>` tag.
