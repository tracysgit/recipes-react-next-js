export default function Button(props) {
  const baseclasses = "inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  
  function isAnchorProps(props) {
    return 'href' in props;
  }

  // const handleClick = function() {
  //   console.log("Button clicked");
  // };

  
  
  return (
    <>
      {isAnchorProps(props) ? (
        <a href={props.href} className={`${baseclasses} ${props.extraclasses}`} {...props}>
          {props.children}
        </a>
      ) : (
        <button className={`${baseclasses} ${props.extraclasses}`} {...props}>{props.children}</button>
        
      )
      }
    </>
  )
}
