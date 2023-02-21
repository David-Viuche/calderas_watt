
// export interface Props extends astroHTML.JSX.AnchorHTMLAttributes {}

// const { href, class: className, ...props } = Astro.props;

// const { pathname } = Astro.url;
// const isActive = href === pathname || href === pathname.replace(/\/$/, '');

//   <a href={href} class:list={[className, (isActive) && 'bg-teal-800', 'p-2 rounded hover:bg-teal-600 bg-slate-200']} {...props}>
// <slot />
// </a>

export const HeaderLink = ({ children, href, target, ariaLabel }) => {
  return (
    <li className='w-6/12 rounded opacity-1 sm:w-auto flex justify-center hover:border-b-2'>
      <a href={href} target={target} aria-label={ariaLabel} className='p-2 w-full h-full flex justify-center'>
        {children}
      </a>
    </li>
  )
}
