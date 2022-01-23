const asyncWrapper = fcn => {
   return async (req, res, next) => {
      try {
         await fcn(req, res, next);
      } catch (error) {
         next(error);
      }
   };
};

module.exports = asyncWrapper;
