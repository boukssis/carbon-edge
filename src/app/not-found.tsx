import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main" className="bg-navy-950 px-6 py-32 text-cream">
      <p className="eyebrow">404</p>
      <h1 className="display-page mt-6">This page is not in the drawings.</h1>
      <p className="mt-6 max-w-xl text-steel">
        The route does not exist.
      </p>
      <div className="mt-10">
        <Button href="/">Return home</Button>
      </div>
    </main>
  );
}
