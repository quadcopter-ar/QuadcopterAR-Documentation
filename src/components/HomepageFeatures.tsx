import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Who are we?',
    description: (
      <>
        A group of graduate and undergraduate students working at the University of California Davis trying to build a
        method reality.
      </>
    ),
  },
  {
    title: 'What do we do?',
    description: (
      <>
        Currently we are building a Quadcopter System to enable Augmented and Virtual reality gameplay with
        games designed by us
      </>
    ),
  },
  {
    title: 'How do I get started?',
    description: (
      <>
        Get in touch with <a href="mailto:max@cs.ucdavis.edu">Professor Nelson Max</a>. While you're at it, go ahead
        and read our <a href="docs/getting-started/welcome">Getting Started </a> to learn more
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {image && <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
