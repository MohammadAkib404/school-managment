import { heroFeatures } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-100 via-white to-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 pb-32 text-center">
        {/* Badge */}
        <span className="rounded-full border border-border bg-base px-5 py-2 text-sm text-muted shadow-sm">Role-Based School Management System</span>

        {/* Hero */}
        <header className="mt-10 max-w-5xl">
          <h1 className="font-heading text-5xl font-bold leading-tight tracking-[-0.04em] text-primary sm:text-7xl lg:text-8xl">
            School Management
            <br />
            With Confidence
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted">
            A secure school management platform with Admin, Teacher, and Student access controls, built for scalability and simplicity.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-primary px-8 py-3 font-medium text-white transition-opacity hover:opacity-80">
              <a href="/admin">Get Started</a>
            </button>

            <button className="rounded-xl border border-border bg-base px-8 py-3 font-medium text-primary transition-opacity hover:opacity-80">
              <a target="_blank" href="https://github.com/MohammadAkib404/school-managment">
                View Repository
              </a>
            </button>
          </div>
        </header>

        {/* Features */}
        <div className="mt-20 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {heroFeatures.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <Icon className="h-5 w-5 text-slate-700" />
              </div>

              <h3 className="text-base font-semibold text-primary">{title}</h3>

              <p className="mt-2 text-sm leading-7 text-muted">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
