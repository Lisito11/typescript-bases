"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Tony', 'Juan', 'Pedro');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map