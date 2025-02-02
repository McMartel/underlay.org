// @ts-nocheck
import React from "react";

import { CollectionPreview } from "components";

import styles from "./CollectionList.module.scss";

type Props = {
	collections: any;
};

const CollectionList: React.FC<Props> = function ({ collections }) {
	return (
		<div className={styles.list}>
			{collections.map((collection) => {
				return (
					<CollectionPreview
						key={collection.slug}
						className={styles.collection}
						{...collection}
					/>
				);
			})}
		</div>
	);
};

export default CollectionList;
