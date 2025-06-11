import logo from '../../images/logo_cash_calendar2.png';
import type { ReactNode } from 'react';

interface Props {
  title: ReactNode;
  content: ReactNode;
}

function Article({ title, content }: Props) {
  return (
    <article className="flex flex-col mb-5 border md:flex-wrap gap-2 p-3">
      <img src={logo.src} alt="image" className="w-12"></img>
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{content}</p>
    </article>
  );
}

export default Article;
