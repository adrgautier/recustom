import { kebabCase } from "lodash";

export default (name: string): string => `--${kebabCase(name)}`;
