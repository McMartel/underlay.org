import React from "react";
import { GetServerSideProps } from "next";

import { CollectionHeader } from "components";
import { CollectionPageParams } from "utils/shared/types";
import { getCollectionData } from "utils/server/queries";

type Props = {
	slug: string;
};

const CollectionConnections: React.FC<Props> = function ({}) {
	return (
		<div>
			<CollectionHeader
				mode="connections"
				// details={slug}
			/>
		</div>
	);
};

export default CollectionConnections;

export const getServerSideProps: GetServerSideProps<Props, CollectionPageParams> = async (
	context
) => {
	const { profileSlug, collectionSlug } = context.params!;
	const profileData = await getCollectionData(profileSlug, collectionSlug);
	const collectionData = profileData?.community?.collections[0];

	if (!collectionData) {
		return { notFound: true };
	}

	return {
		props: {
			slug: collectionData.slug,
		},
	};
};
