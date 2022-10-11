import { Section } from "../components/Section";

export default function SoteDuunit() {
  return (
    <div className="w-screen h-full text-slate-300 flex flex-col">
      <Section>
        <div className="max-w-screen-md m-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
            Idea behind the Verba
          </h2>
          <p className="mb-5">
            In learning the key factor is motivation. You can bang the new
            information to someones heads but, if she lacks the inner motivation
            to learn you cannot assume great results. However, if someone is
            truly motivated she will learn and fast.
            <br />
            <br />
            The idea in Verba is to make vocabulary learning more motivating.
            You watch YouTube about the subjects you are interested in and train
            the spoken words from the videos. If you create an account you can
            also start collecting your own vocabulary chest of the words you
            already know. Then you don’t have to train these words again and for
            some reason it is also quite satisfactory to collect new words to
            your vocabulary chest.
          </p>
        </div>
      </Section>
    </div>
  );
}
