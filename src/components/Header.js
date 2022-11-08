import config from '../../config.json'
import { StylesHeader } from '../styles/StylesHeader';

export function Header() {
    return (
      <StylesHeader>
        <section className="user-info">
          <img src={`https://github.com/${config.github}.png`} />
          <div>
            <h2>{config.name}</h2>
            <p>{config.job}</p>
          </div>
        </section>
      </StylesHeader>
    );
  }