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
  const { renderDefault, value } = props;
  const basisValue = useFormValue([`basis`]) as string;
  return (
    <>
      <div style={{ flex: 1 }}>{renderDefault(props)}</div>
      {basisValue && value && (
        <a
          target='_blank'
          href={`https://kierunekdzierganie.pl${productUrls[basisValue]}/${value.current}`}
          style={styles}
        >
          Link do produktu
        </a>
      )}
      {basisValue && value && (
        <a
          target='_blank'
          href={`https://kierunek-dzierganie-git-beta-kryptonum.vercel.app${productUrls[basisValue]}/${value.current}`}
          style={styles}
        >
          Link do podglądu produktu
        </a>
      )}
    </>
  );
}

export default ProductSlug;
