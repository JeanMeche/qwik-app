import {
  component$,
  useClientEffect$,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import styles from './flower.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });

  useClientEffect$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <>
      <input
        type='range'
        value={state.number}
        max={50}
        onInput$={(ev) => {
          state.number = (ev.target as HTMLInputElement).valueAsNumber;
        }}
      />
      <div
        style={{ '--state': `${state.count * 0.1}` }}
        class={{ host: true, pride: loc.query['pride'] === 'true' }}
      >
        {Array.from({ length: state.number }, (_, i) => (
          <div
            key={i}
            class={{ square: true, odd: i % 2 === 0 }}
            style={{ '--index': `${i + 1}` }}
          />
        )).reverse()}
      </div>

      <div class='flex flex-col items-center justify-center gap-6 '>
        <div
          class='button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  '
        >
          <span class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>
            Active
          </span>
        </div>

        <div
          class='button w-40 h-16 bg-blue-500  cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    rounded-full  border-[1px] border-blue-400
    
  '
        >
          <span class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>
            Test Me
          </span>
        </div>

        <div
          class='button w-16 h-16 bg-blue-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]
    border-[1px] border-blue-400
  '
        >
          <span class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>
            ?
          </span>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};
