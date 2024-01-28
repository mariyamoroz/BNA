import React from 'react';

const LinkIcon = (props: {
    icon?: React.ComponentType<{
        className?: string;
    }>;
    path?: string;
    className?: string;
    onClick?: void;
}): JSX.Element => {

    const { path, className, onClick } = props;

    const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    }

    return (
        <a href={path} className={className} onClick={e => clickHandler(e)}>
            <props.icon />
        </a>
    )
}

export default LinkIcon;