import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-48  text-white bg-[#04081A]">
        <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 text-4xl font-medium lg:text-5xl text-white flex w-full justify-center items-center">
            Web Developer | Framework Creator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px size-full from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[10px] shadow block"
                  alt="payments illustration"
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                <span className="font-bold text-white">
                  Hello! I'm Aelisha Patel,
                </span> a dedicated Full-Stack Developer passionate about building secure, scalable web platforms using React.js, Node.js, Next.js, and MongoDB. With over 3+ years of hands-on experience, I specialize in B2B and SaaS development, focusing on clean architecture, role-based systems, and seamless payment integration with Stripe and Razorpay.{" "}
              </p>
              <p className="text-white">
                I’m on a mission to simplify UI development and boost productivity for fellow developers. My goal is to make modern web development faster, cleaner, and more accessible by crafting intuitive frameworks and reusable tools.
              </p>

              <div className="pt-4">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm deeply invested in backend architecture, real-time collaboration features, and frontend performance optimization. Every line of code I write is driven by a desire to deliver real value — to both users and developers.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Aelisha Patel, Crafting frameworks. <br/>
                      Coding the future. 🚀💻
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
