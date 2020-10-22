import React from "react";
import classNames from "classnames";
import { Avatar } from "evergreen-ui";

import { Icon } from "components";

import styles from "./ScopeHeader.module.scss";

export type Props = {
	type: "collection" | "org" | "user";
	title: React.ReactNode;
	detailsTop?: React.ReactNode;
	detailsBottom?: React.ReactNode;
	avatar?: string;
	initial?: string;
};

const ScopeHeader: React.FC<Props> = function ({
	type,
	title,
	detailsTop = null,
	detailsBottom = null,
	avatar = "",
	initial = "",
}) {
	const showAvatar = avatar || initial;
	return (
		<div className={classNames(styles.scopeHeader, "clearfix")}>
			<Icon className={styles.typeIcon} icon={type} size={28} />
			{showAvatar && (
				<Avatar
					className={styles.avatarComponent}
					name={initial}
					src={avatar}
					size={100}
					borderRadius="3px"
				/>
			)}
			<div className={styles.title}>{title}</div>
			<div className={classNames(styles.details, styles.top)}>{detailsTop}</div>
			<div className={classNames(styles.details)}>{detailsBottom}</div>
		</div>
	);
};

export default ScopeHeader;
