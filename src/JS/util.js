import fetchData from './http';

const loadTitle = () =>
  fetchData().then((extractedData) => {
    const { title } = extractedData;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });

const printTitle = () => {
  loadTitle().then((title) => {
    console.log(title);
  });
};

export { loadTitle, printTitle };
