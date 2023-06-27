import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

type BannerType = { title: string };

export function Banner(props: BannerType) {
  return (
    <section className="bg-white shadow flex justify-between items-center">
      <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800">
          {props.title}
        </h1>
      </div>
      <div className="px-4 py-6 sm:px-6 lg:px-8 cursor-pointer">
        <QuestionMarkCircleIcon
          className="w-10 h-10 text-black"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
