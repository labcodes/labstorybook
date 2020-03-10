export default function corujaWatch(elements) {
  function onReady(callback){
    if (document.readyState!='loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
  }

  const applyClasses = () => {
    elements.map(element => {
      const matches = document.querySelectorAll(element.cssInJsSelector);
      if (matches && matches.length) {
        matches.forEach(match => {
          if (match.className.indexOf(element.customClassName) === -1){
            match.className = `${match.className} ${element.customClassName}`
          }
        });
      }
    });
  }

  const setUpObserver = () => {
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length) {
          applyClasses();
        }
      })
    });

    mutationObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributeOldValue: true,
    });
  }

  onReady(() => {
    setUpObserver();
    applyClasses();
  });
}
