const prefix = "qb-wp-";

export const joinClass = (...classNames): string => {
    return classNames
        .filter((className: string) => !!className)
        .map((className: string) =>
            className.startsWith(prefix) ? className : `${prefix}${className}`
        )
        .join(" ");
};
