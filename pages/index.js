import Image from 'next/image'
import { Inter } from 'next/font/google'

const toggleMenu = ()=>{
  const hamburgerBtn = document.getElementById('hamburger-button')
const mobileMenu = document.getElementById('mobile-menu')
  mobileMenu.classList.toggle('hidden')
  mobileMenu.classList.toggle('flex')
  hamburgerBtn.classList.toggle('toggle-btn')
}
const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
const mobileMenu = document.getElementById('mobile-menu')
  hamburgerBtn.addEventListener('click',toggleMenu)
  mobileMenu.addEventListener('click',toggleMenu)
}
export default function Home() {
  return (
    <html>
        <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acme Rockets</title>
    <link rel="stylesheet" href="css/style.css" />
    <script src="./main" defer></script>
  </head>
  <body>
      

<header class="bg-teal-700 text-white sticky top-0 z-10">
<section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
  <h1 class="text-3xl font-medium">
    <a href="#hero">🚀 Acme Rockets</a>
  </h1>
  <div>
    <button
      id="hamburger-button"
      class="text-3xl md:hidden cursor-pointer relative w-8 h-8" onClick={toggleMenu}
    >

      <div
        class="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"
      ></div>
    </button>
    <nav class="hidden md:block space-x-8 text-xl" aria-label="main">
      <a href="#rockets" class="hover:opacity-90" >Our Rockets</a>
      <a href="#testimonials" class="hover:opacity-90">Testimonials</a>
      <a href="#contact" class="hover:opacity-90">Contact Us</a>
    </nav>
  </div>
</section>
<section
  id="mobile-menu"
  class="absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden text-papayawhip"
>
  <nav class="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
    <a href="#hero" class="w-full text-center py-6 hover:opacity-90" onClick= {toggleMenu}>Home</a>
    <a href="#rockets" class="w-full text-center py-6 hover:opacity-90" onClick= {toggleMenu}>Rockets</a>
    <a href="#testimonials"class="w-full text-center py-6 hover:opacity-90" onClick= {toggleMenu}>Testimonials</a>
    <a href="#contact" class="w-full text-center py-6 hover:opacity-90" onClick={ toggleMenu}>Contact Us</a>
    <a href="#footer" class="w-full text-center py-6 hover:opacity-90" onClick= {toggleMenu}>Legal</a>
  </nav>
</section>
</header>
<main class="max-w-4xl mx-auto">
<section id="hero" class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
  <article class="sm:w-1/2">
    <h2  class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white" >
      We Boldy Go
      <span class="text-indigo-700 dark:text-indigo-300"> Where No Rocket </span>
      Has Gone Before...
    </h2>
    <p
      class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
    >
      We're building rockets for the next century today. From the moon to
      Mars, Jupiter and beyond...
    </p>
    <p
      class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
    >
      Think Acme Rockets.
    </p>
  </article>
  <div className="w-1/2"><img src="./rocketdab.png" alt="Rocket Dab" /></div>
  
</section>
<hr class="mx-auto bg-black dark:bg-white w-1/2" />
<section
  id="rockets"
  class="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
>
  <h2
    class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
  >
    Our Rockets
  </h2>
  <ul
    class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8"
  >
    <li
      class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
    >
      <img src="./rocketman.png" alt="Explorer" class="w-1/2 mb-6" />
      <h3 class="text-3xl text-center text-slate-900 dark:text-white">
        Explorer
      </h3>
      <p
        class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400"
      >
        $
      </p>
      <p
        class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400"
      >
        Affordable Exploration
      </p>
    </li>
    <li
      class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
    >
      <img
        src="./rocketride.png"
        alt="Adventurer"
        class="w-1/2 mb-6"
      />
      <h3 class="text-3xl text-center text-slate-900 dark:text-white">
        Adventurer
      </h3>
      <p
        class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400"
      >
        $$
      </p>
      <p
        class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400"
      >
        Best Selling Rocket!
      </p>
    </li>
    <li
      class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
    >
      <img src="./rocketlaunch.png" alt="Launch" class="w-1/2 mb-6" />
      <h3 class="text-3xl text-center text-slate-900 dark:text-white">
        Infinity
      </h3>
      <p
        class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400"
      >
        $$$
      </p>
      <p
        class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400"
      >
        Luxury Starship
      </p>
    </li>
  </ul>
</section>
<hr class="mx-auto bg-black dark:bg-white w-1/2" />
<section
  id="testimonials"
  class="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
>
  <h2
    class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
  >
    Testimonials
  </h2>
  <figure class="my-12">
    <blockquote
      class="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative"
    >
      <p
        class="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2"
      >
        Acme has always been there for me. Their Explorer rocket arrived
        in a wooden crate as expected. Life-long cutomer! A++ shopping
        experience.
      </p>
    </blockquote>
    <figcaption
      class="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400"
    >
      &#8212;Wile E. Coyote, Genius
    </figcaption>
  </figure>
  <figure class="my-12">
    <blockquote
      class="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative"
    >
      <p
        class="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2"
      >
        The Acme adventurer Rocket has thwarted my Illudium Q-36 Explosive
        Space Modulator on several occassions.
        <span class="italic">This makes me very,very angry!</span>
        Nevertheless, K-9 and I have awarded Acme the Martian contract for
        space exploration rockets based on Acme's quality and sturdy
        designs.
      </p>
    </blockquote>
    <figcaption
      class="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400"
    >
      &#8212;Marvin the Martian &amp; K-9
    </figcaption>
  </figure>
  <figure class="my-12">
    <blockquote
      class="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative"
    >
      <p
        class="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2"
      >
        I knew I not only wanted &#8212;
        <span class="italic">I needed</span> &#8212; Acme's Infinity
        Rocket for my mission in space. Acme delivered in one day! Nothing
        says <q class="italic">Take me to your leader</q> like Acme's
        Infiniy Rocket! 💯
      </p>
    </blockquote>
    <figcaption
      class="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400"
    >
      &#8212;Buzz Lightyear
    </figcaption>
  </figure>
</section>
<hr class="mx-auto bg-black dark:bg-white w-1/2" />
<section
  id="contact"
  class="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
>
  <h2
    class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
  >
    Contact Us
  </h2>
  <form
    action=""
    class="max-w-5xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
  >
    <label for="subject">Subject:</label>
    <input
      type="text"
      id="subject"
      name="subject"
      required
      minLength="3"
      maxLength="60"
      placeholder="Your Subject"
      class="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
    />
    <label for="message">Message:</label>
    <textarea
      name="message"
      id="message"
      cols="30"
      rows="10"
      placeholder="Your Message"
      required
      class="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
    ></textarea>
    <button
      class="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
      Submit
    </button>
  </form>
</section>
<hr class="mx-auto bg-black dark:bg-white w-1/2" />
</main>
    <footer id="footer" class="bg-teal-700 text-white text-xl">
      <section class="max-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <nav class="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#rockets" class="hover:opacity-90">Our Rockets</a>
          <a href="#testimonials" class="hover:opacity-90">Testimonials</a>
          <a href="#contact" class="hover:opacity-90">Contact Us</a>
        </nav>
      </section>
        </footer>
      </body>
 </html>

  )
}
