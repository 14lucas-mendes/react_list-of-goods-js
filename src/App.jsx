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
  const [activeButton, setActiveButton] = useState('');

  const IS_LIGHT_ACTIVE_SORT_ALPHABETICAL = 'alphabetical';
  const IS_LIGHT_ACTIVE_SORT_LENGTH = 'length';
  const IS_LIGHT_ACTIVE_SORT_REVERSE = 'reverse';

  const visibleGoods = [...goodsFromServer];

  const sortGoodstAlphabetical = () => {
    const alphabetical = [...visibleGoods.sort()];

    setPrepareGoods(alphabetical);
    setIsSorted(true);
    setActiveButton('alphabetical');
  };

  const sorGoodstLength = () => {
    const length = visibleGoods.sort(
      (goods1, goods2) => goods1.length - goods2.length,
    );

    setPrepareGoods([...length]);
    setIsSorted(true);
    setActiveButton('length');
  };

  const sortGoodsByReverse = () => {
    const reverse = visibleGoods.sort().reverse();

    setPrepareGoods([...reverse]);
    setIsSorted(true);
    setActiveButton('reverse');
  };

  const reset = () => {
    setPrepareGoods([...goodsFromServer]);
    setIsSorted(false);
    setActiveButton('');
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${activeButton === IS_LIGHT_ACTIVE_SORT_ALPHABETICAL ? '' : 'is-light'}`}
          onClick={sortGoodstAlphabetical}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className={`button is-info ${activeButton === IS_LIGHT_ACTIVE_SORT_LENGTH ? '' : 'is-light'}`}
          onClick={sorGoodstLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          className={`button is-info ${activeButton === IS_LIGHT_ACTIVE_SORT_REVERSE ? '' : 'is-light'}`}
          onClick={sortGoodsByReverse}
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
