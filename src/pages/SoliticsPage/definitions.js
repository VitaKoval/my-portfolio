import SoliticsImg from '@/assets/images/solitics-intro.png'

export const contentData = {
  id: 'solitics',
  type: 'intro',
  title: 'Solitics Website',
  subtitle:
    'Solitics is a website project I worked on during my time at Wogi. In this project, I was responsible for various development aspects, including creating and optimizing website sections, implementing animations, and ensuring feedback form.',
  img: SoliticsImg,
  link: 'https://solitics.com/',
  technologies: [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'WordPress',
    'PHP',
    'jQuery',
  ],
  isReverse: true,
  sections: [
    {
      id: '1',
      type: 'primary',
      textHTML: `
      <h3>Development of Responsive Sections</h3>
      <p>
        Created modern, pixel-perfect sections based on Figma designs. Ensured
        correct display on all devices, including mobile phones, tablets, and
        desktops.
      </p>
      <p>
        I meticulously translated Figma designs into fully responsive,
        pixel-perfect sections that adhered to the exact design specifications.
        This process involved careful attention to detail, ensuring that each
        element, from typography to images, aligned perfectly across different
        screen sizes. I implemented flexible grid systems and CSS media queries
        to achieve optimal layouts that adapt fluidly to various device
        dimensions.
      </p>
      <p>
        The result was a seamless user experience across all devices, with each
        section of the website maintaining its integrity and visual appeal on
        mobile phones, tablets, and desktops. This responsiveness not only
        improved the aesthetic quality of the site but also enhanced its
        usability, ensuring that users could easily navigate and interact with
        the content regardless of the device they were using.
      </p>
          `,
      img: SoliticsImg,
    },
    {
      id: '2',
      type: 'primary',
      textHTML: `
      <h3>Integration into WordPress</h3>
       <p>
        Implemented sections as flexible content, simplifying the creation of new
        pages using templates and allowing the client to easily manage content
        independently.
      </p>
      <p>
        These flexible content were reusable across multiple pages, eliminating
        the need to duplicate code. They were designed to handle various content
        types, such as text, images, and videos, and were easily customizable to
        meet the specific needs of each page.
      </p>
      <p>
        This approach saved time and effort in both building and updating pages.
        The client gained the ability to modify content without relying on a
        developer, streamlining updates and enabling more efficient workflows.
        In the long term, this system supported faster development cycles and
        simplified site maintenance.
      </p>    
      `,
      img: SoliticsImg,
    },
    {
      id: '3',
      type: 'secondary',
      textHTML: `
      <h3>What is Flexible Content?</h3>
      <p>
        Flexible Content in WordPress, allows you to create custom layouts with
        multiple content blocks. Each block can contain different types of
        fields (text, images, videos, etc.), and their order can be easily
        adjusted. This approach gives both developers and clients flexibility,
        enabling dynamic page structures that are easy to update and manage
        without needing to write code for each change.
      </p>
        `,
    },
    {
      id: '4',
      type: 'primary',
      textHTML: `
      <h3>Contact Forms</h3>
      <p>
        Сreated adaptive contact forms to ensure a seamless experience across
        devices, using the Contact Form 7 plugin for WordPress. This allowed the
        forms to be fully responsive, visually appealing, and efficient on
        mobile, tablet, and desktop. Also implemented multi-step forms, which
        broke down complex forms into easier sections, improving user engagement
        and submission rates. Additionally, designed a Subscribe Form that
        allowed users to sign up for updates and newsletters, integrating it
        seamlessly into the site's overall design.
      </p>

      <p>
        To further improve client interactions, integrated HubSpot forms into
        the site. This integration connected the forms directly to the client’s
        CRM, streamlining the process of managing leads and customer
        communications. It allowed for better tracking of inquiries, easier
        follow-up, and enhanced data organization, ultimately improving the
        client’s ability to manage their customer relationships effectively.
      </p>
        `,
      img: SoliticsImg,
    },
    {
      id: '5',
      type: 'primary',
      textHTML: `
      <h3>Animations and Interactive Elements</h3>
      <p>
        Implemented SVG animations for interactive images, giving the website a
        dynamic and engaging feel. These animations were created purely with
        CSS, avoiding the use of external libraries or plugins. This method
        ensured smooth, lightweight animations that enriched the user experience
        by making the content more interactive, while also preserving fast page
        load times and overall site performance.
      </p>
        `,
      img: SoliticsImg,
    },
    {
      id: '6',
      type: 'primary',
      textHTML: `<h3>Performance Optimization</h3>
          <p>Implemented performance optimization by leveraging Gulp to minimize CSS and JavaScript files during the build process. This ensured the removal of unnecessary characters, spaces, and comments, resulting in smaller file sizes and improved loading times. The optimized, minified files were then uploaded to WordPress, ensuring efficient and high-performing page delivery across all devices.</p>`,
      img: SoliticsImg,
    },
    {
      id: '7',
      type: 'summary',
      textHTML: `<h2>Project Outcomes</h2>
  <p>
    Thanks to the implementation of flexible blocks, significant flexibility was gained in content management. This allowed for the quick creation of new pages using templates, greatly simplifying the content management process and reducing the time required for site updates.
  </p>
  <p>
    The configured contact forms ensured fast and reliable user interactions, leading to an increase in the number of successful inquiries. The intuitive form design and precise integration contributed to an improved user experience.
  </p>
  <p>
    The site's responsiveness became a key factor in improving user interactions. By creating pixel-perfect sections that display correctly on mobile devices, tablets, and desktops, the site became accessible and user-friendly on any device.
  </p>
  <p>
    The final step was improving the site's performance. Optimizing images and minimizing CSS and JS files led to a 15% improvement in page loading speed, which positively impacted the overall user experience and reduced loading times when navigating between pages.
  </p>`,
    },
  ],
}
