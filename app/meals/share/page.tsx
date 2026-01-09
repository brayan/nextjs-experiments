import ImagePicker from "@/components/image-picker";

export default function ShareMealPage() {
  const labelClass =
    "mb-2 block text-base font-bold font-montserrat uppercase text-[#b3aea5]";

  const fieldClass =
    "block w-full rounded border border-[#454952] bg-[#1c2027] px-4 py-2 " +
    "text-xl font-montserrat text-[#ddd6cb] " +
    "focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]";

  const buttonClass =
    "cursor-pointer rounded-sm px-8 py-3 text-xl font-montserrat text-white " +
    "shadow-[0_2px_5px_rgba(0,0,0,0.3)] " +
    "bg-gradient-to-r from-[#f9572a] to-[#ff9b05] " +
    "hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241] " +
    "disabled:cursor-not-allowed disabled:bg-[#ccc] disabled:text-[#979797] " +
    "disabled:hover:from-[#ccc] disabled:hover:to-[#ccc] " +
    "disabled:focus:from-[#ccc] disabled:focus:to-[#ccc]";

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
        <form className="max-w-200">
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

          <ImagePicker label="This is my label" name="This is my name"/>

          <p className="text-right">
            <button type="submit" className={buttonClass}>
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
