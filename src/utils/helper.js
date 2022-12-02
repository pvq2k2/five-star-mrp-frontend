/* eslint-disable no-useless-escape */
export const isValidEmail = (email) => {
  const isValid = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
  return isValid.test(email);
};
export const getToken = () => localStorage.getItem("auth-token");

export const cathError = (error) => {
  const { response } = error;
  if (response?.data) return response.data;

  return { error: error.message || error };
};

export const renderItem = (result) => {
  return (
    <div key={result.id} className="flex space-x-2 rounded overflow-hidden">
      <img
        src={result.avatar}
        alt={result.name}
        className="w-16 h-16 object-cover"
      />
      <p className="dark:text-white font-semibold hover:underline">
        {result.name} Reviews
      </p>
    </div>
  );
};

export const getPoster = (posters = []) => {
  const { length } = posters;

  if (!length) return null;
  // if poster has more then 2 items then selecting second poster.
  if (length > 2) return posters[1];
  // other wise the first one

  return posters[0];
};

export const convertReviewCount = (count = 0) => {
  if (count < 999) return count;

  return parseInt(count / 1000).toFixed(2) + "k";
};
