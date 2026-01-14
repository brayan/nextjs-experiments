import ImagePicker from "@/components/image-picker";
import MealsFormSubmit from "@/components/meals-form-submit";
import { shareMeal } from "@/lib/meals/actions";

export default function ShareMealPage() {
  const labelClass = "mb-2 block text-base font-bold font-montserrat uppercase text-[#b3aea5]";

  const fieldClass =
    "block w-full rounded border border-[#454952] bg-[#1c2027] px-4 py-2 " +
    "text-xl font-montserrat text-[#ddd6cb] " +
    "focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]";

  return (
    <>
      <header className="mx-auto mt-12 mb-20 w-[90%] max-w-300 text-2xl text-[#ddd6cb]">
        <h1>
          Share your{" "}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <main className="mx-auto my-12 w-[90%] max-w-300 text-white">
        <form className="max-w-200" action={shareMeal}>
          <div className="flex gap-4">
            <p className="w-full">
              <label htmlFor="name" className={labelClass}>
                Your name
              </label>
              <input id="name" name="name" type="text" required className={fieldClass} />
            </p>

            <p className="w-full">
              <label htmlFor="email" className={labelClass}>
                Your email
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </p>
          </div>

          <p>
            <label htmlFor="title" className={labelClass}>
              Title
            </label>
            <input id="title" name="title" type="text" required className={fieldClass} />
          </p>

          <p>
            <label htmlFor="summary" className={labelClass}>
              Short Summary
            </label>
            <input id="summary" name="summary" type="text" required className={fieldClass} />
          </p>

          <p>
            <label htmlFor="instructions" className={labelClass}>
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className={fieldClass}
            />
          </p>

          <ImagePicker label="Your image" name="image"/>

          <p className="text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
