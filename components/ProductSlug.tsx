import React from 'react';
import { useFormValue } from 'sanity';

const styles = {
  display: 'block',
  padding: '10px',
};

const productUrls: { knitting: string; crocheting: string } = {
  knitting: '/produkty-do-dziergania',
  crocheting: '/produkty-do-szydelkowania',
};

function ProductSlug(props) {
  const name = 'Link do produktu';
  console.log(props);
  const { renderDefault, value } = props;
  const basisValue = useFormValue([`basis`]) as string;
  console.log(basisValue);
  console.log(value);
  return (
    <>
      <div style={{ flex: 1 }}>{renderDefault(props)}</div>
      {basisValue && value && (
        <a
          href={`https://kierunekdzierganie.pl${productUrls[basisValue]}/${value.current}`}
          style={styles}
        >
          {name}
        </a>
      )}
    </>
  );
}

export default ProductSlug;
