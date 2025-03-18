import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [prepareGoods, setPrepareGoods] = useState([...goodsFromServer]);
  const [isSorted, setIsSorted] = useState(false);

  const visibleGoods = [...goodsFromServer];

  const sortAlphabetical = () => {
    const alphabetical = [...visibleGoods.sort()];

    setPrepareGoods(alphabetical);
    setIsSorted(true);
  };

  const sortLength = () => {
    const length = visibleGoods.sort(
      (goods1, goods2) => goods1.length - goods2.length,
    );

    setPrepareGoods([...length]);
    setIsSorted(true);
  };

  const sortByReverse = () => {
    const reverse = visibleGoods.sort().reverse();

    setPrepareGoods([...reverse]);
    setIsSorted(true);
  };

  const reset = () => {
    setPrepareGoods([...goodsFromServer]);
    setIsSorted(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={sortAlphabetical}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="button is-success is-light"
          onClick={sortLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          className="button is-warning is-light"
          onClick={sortByReverse}
        >
          Reverse
        </button>
        {isSorted && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={reset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {prepareGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
