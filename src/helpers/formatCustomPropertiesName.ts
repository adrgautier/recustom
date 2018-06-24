import * as dashify from 'dashify';

export default (name: string) :string => (
    `--${dashify(name)}`
);
