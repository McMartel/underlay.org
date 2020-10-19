import React from "react";

export type IconKey = "collection" | "edit" | "home" | "org" | "rocket" | "user";

type Icons = {
	[key: string]: {
		path: React.ReactNode;
		viewboxDefault: number;
	};
};

const icons: Icons = {
	edit: {
		path: (
			<path d="M23.246 3.925l-3.175-3.175c-0.461-0.459-1.096-0.742-1.798-0.742s-1.337 0.284-1.798 0.742l-13.824 13.824c-0.294 0.295-0.517 0.661-0.639 1.071l-0.005 0.018-1.947 6.729c-0.032 0.106-0.050 0.227-0.050 0.353 0 0.697 0.565 1.262 1.262 1.262 0.126 0 0.248-0.018 0.362-0.053l-0.009 0.002 6.729-1.947c0.428-0.127 0.794-0.349 1.089-0.643l-0 0 13.803-13.841c0.46-0.461 0.744-1.097 0.744-1.8s-0.284-1.339-0.744-1.8l0 0zM4.009 17.812l2.179 2.179-3.066 0.892zM8.484 18.729l-3.213-3.213 13.038-12.979 3.175 3.205z" />
		),
		viewboxDefault: 24,
	},
	home: {
		path: (
			<path d="M0.386 7.21099C0.15 7.39499 0 7.67999 0 7.99999V19C0 19.828 0.337 20.58 0.879 21.121C1.421 21.662 2.172 22 3 22H17C17.828 22 18.58 21.663 19.121 21.121C19.662 20.579 20 19.828 20 19V7.99999C19.999 7.69999 19.866 7.40699 19.614 7.21099L10.614 0.210993C10.256 -0.0640067 9.753 -0.0740067 9.386 0.210993L0.386 7.21099ZM4 19C3.724 19 3.475 18.889 3.293 18.707C3.111 18.525 3 18.276 3 18V8.48899L10 3.26699L17 8.48899V18C17 18.276 16.889 18.525 16.707 18.707C16.525 18.889 16.276 19 16 19C8.08011 19 10.0667 19 4 19Z" />
		),
		viewboxDefault: 24,
	},
	collection: {
		path: (
			<path d="M509.764 0.186c-1.317 0.282-2.575 0.786-3.719 1.488l-440.594 250.066c-1.826 1.054-3.339 2.574-4.385 4.405s-1.587 3.906-1.569 6.015v500.131c0.046 2.044 0.618 4.045 1.661 5.804s2.521 3.222 4.293 4.242l440.594 250.068c1.81 1.046 3.862 1.595 5.954 1.595 2.088 0 4.144-0.549 5.954-1.595l440.591-250.068c1.774-1.020 3.251-2.483 4.293-4.242s1.616-3.76 1.66-5.804v-500.131c0.018-2.108-0.523-4.184-1.569-6.015s-2.56-3.351-4.385-4.405l-440.591-250.066c-2.461-1.464-5.369-1.993-8.188-1.488zM511.999 25.49l416.402 236.67-416.402 236.298-416.406-236.298 416.406-236.67zM83.313 282.255l416.778 236.668v472.967l-416.778-236.668v-472.967zM940.682 282.255v472.967l-416.775 236.668v-472.967l416.775-236.668z" />
		),
		viewboxDefault: 1024,
	},
	org: {
		path: (
			<path
				stroke="#ede9e4"
				strokeWidth="18"
				d="M888.578 616.126v-207.173c45.319-10.792 79.846-51.794 79.846-101.429 0-57.189-46.398-103.587-103.585-103.587-30.215 0-56.112 12.948-75.535 32.371l-175.879-101.429c3.237-9.711 5.394-20.502 5.394-31.292 0-57.189-46.398-103.587-103.589-103.587-57.187 0-103.586 46.398-103.586 103.587 0 9.711 2.158 18.343 4.316 28.055l-182.356 104.666c-19.423-20.502-45.319-32.371-75.532-32.371-57.189 0-103.587 46.398-103.587 103.587 0 49.635 34.529 90.637 79.848 101.429v206.095c-45.319 10.789-79.848 51.792-79.848 101.427 0 57.19 46.398 103.589 103.587 103.589 30.213 0 56.11-12.95 75.532-32.369l179.119 103.585c-3.237 9.713-4.316 19.423-4.316 29.133 0 57.19 46.4 103.589 103.587 103.589 57.19 0 103.589-46.398 103.589-103.589 0-10.789-2.158-20.498-4.319-29.133l179.12-103.585c19.423 20.502 45.319 32.369 75.535 32.369 57.187 0 103.585-46.398 103.585-103.589-1.079-48.556-34.527-89.556-80.925-100.348zM774.201 666.84c-35.61-8.631-76.613-15.104-123.012-18.344 3.237-36.685 6.473-73.373 6.473-111.137h183.439v78.768c-29.136 6.473-52.875 24.817-66.9 50.714zM841.101 408.953v78.768h-183.439c-1.079-37.764-3.237-75.531-6.473-111.137 46.398-4.319 87.402-9.713 123.012-18.345 14.025 25.897 37.764 44.242 66.9 50.715zM864.839 252.493c31.291 0 56.108 24.818 56.108 56.11s-24.817 56.109-56.108 56.109c-31.294 0-56.112-24.818-56.112-56.109s24.817-56.11 56.112-56.11zM761.251 311.84c-33.448 7.553-72.294 14.027-116.535 17.265-7.552-51.794-18.344-100.35-33.452-139.195l153.223 88.481c-3.237 9.712-4.315 19.423-4.315 29.134 0 2.158 1.079 3.237 1.079 4.316zM514.152 208.253c17.265 0 33.452-4.316 48.556-11.869 12.95 34.529 25.896 79.848 34.531 137.037-26.975 1.079-55.033 2.158-86.323 2.158-30.212 0-59.348-1.079-86.323-2.158 8.635-58.268 21.581-105.745 35.61-140.274 16.187 8.632 34.527 15.106 53.95 15.106zM514.152 47.477c31.294 0 56.112 24.818 56.112 56.11s-24.817 56.109-56.112 56.109c-31.291 0-56.108-24.818-56.108-56.109 0-30.213 25.896-56.11 56.108-56.11zM419.198 380.899c29.133 1.079 59.348 2.158 91.717 2.158 33.452 0 63.664-1.079 91.717-2.158 3.237 33.448 5.394 69.058 6.473 107.9h-196.382c0-38.843 3.237-75.531 6.474-107.9zM609.106 536.28c-1.079 38.843-3.237 74.452-6.473 107.9-28.054-1.079-58.266-2.158-91.717-2.158-33.448 0-63.664 1.079-91.717 2.158-3.237-33.448-5.395-69.058-6.474-107.9h196.382zM510.916 816.827c-18.344 0-35.61 5.394-50.714 14.029-14.029-34.531-26.975-80.929-35.61-138.119 30.215-1.079 59.348-2.158 86.323-2.158 31.291 0 59.348 1.079 86.323 2.158-8.635 57.19-21.581 103.589-34.531 138.119-16.183-8.635-33.448-14.029-51.792-14.029zM180.732 616.126v-78.768h183.435c1.079 37.764 3.237 75.531 6.474 111.137-46.399 4.319-87.401 9.713-123.009 18.344-14.027-25.896-37.766-44.24-66.9-50.714zM364.168 488.799h-183.435v-78.768c29.134-6.473 52.873-25.896 66.9-50.714 35.608 8.632 76.611 15.105 123.009 18.345-3.237 35.606-5.395 73.373-6.474 111.137zM100.884 308.603c0-31.292 24.818-56.11 56.11-56.11s56.11 24.818 56.11 56.11c0 31.292-24.818 56.109-56.11 56.109-30.213 0-56.11-25.897-56.11-56.109zM156.994 772.586c-31.292 0-56.11-24.817-56.11-56.112 0-31.291 24.818-56.108 56.11-56.108s56.11 24.817 56.11 56.108c0 31.294-24.818 56.112-56.11 56.112zM256.265 746.69c3.237-9.713 4.316-19.423 4.316-29.133 0-1.083 0-2.161 0-3.24 36.687-8.631 76.611-15.104 116.535-18.341 7.553 51.792 18.343 100.348 33.45 139.195l-154.301-88.481zM377.116 329.104c-44.24-3.237-82.006-9.712-116.535-17.265 0-1.079 0-2.158 0-3.237 0-10.79-2.158-20.502-4.316-29.134l153.222-88.481c-14.027 38.845-24.818 86.322-32.371 138.116zM510.916 977.602c-31.291 0-56.108-24.817-56.108-56.112 0-31.291 24.817-56.108 56.108-56.108s56.112 24.817 56.112 56.108c0 30.215-24.821 56.112-56.112 56.112zM611.264 835.171c14.029-39.925 25.9-87.402 33.452-139.195 44.24 3.237 83.087 9.71 116.535 17.262 0 1.079 0 2.158 0 4.319 0 10.789 2.158 20.498 4.315 29.133l-154.302 88.481zM864.839 772.586c-31.294 0-56.112-24.817-56.112-56.112 0-31.291 24.817-56.108 56.112-56.108 31.291 0 56.108 24.817 56.108 56.108 0 31.294-25.896 56.112-56.108 56.112z"
			/>
		),
		viewboxDefault: 1024,
	},
	rocket: {
		path: (
			<g>
				<path d="M958.893 0.103c-88.951 5.188-249.082 20.435-322.218 64.376-93.981 56.468-186.72 162.474-261.542 264.237l-149.242 19.513c-28.798 3.766-53.863 22.665-65.411 49.312l-34.998 80.771c-2.776 6.394-2.458 13.699 0.842 19.821 3.3 6.132 9.227 10.422 16.077 11.626l101.718 17.977c-7.555 12.79-14.006 23.951-19.081 32.893-13.584 23.939-9.456 54.262 10.047 73.763l5.677 5.677-24.121 24.121c-24.291 24.304-24.291 63.853 0 88.166l55.011 55.024c11.776 11.776 27.433 18.25 44.089 18.25 16.646 0 32.301-6.486 44.077-18.262l24.111-24.109 5.677 5.677c11.639 11.641 27.091 18.045 43.497 18.045 10.58 0 21.037-2.765 30.265-7.997 8.942-5.075 20.093-11.514 32.881-19.081l17.977 101.718c1.206 6.861 5.495 12.788 11.629 16.077 3.357 1.808 7.066 2.72 10.775 2.72 3.072 0 6.154-0.627 9.044-1.878l80.771-34.986c26.649-11.549 45.545-36.614 49.312-65.411l19.513-149.244c101.763-74.832 207.759-167.559 264.237-261.54 43.942-73.138 59.199-233.268 64.377-322.22 0.989-17.112-4.927-33.382-16.658-45.83-12.366-13.153-29.979-20.264-48.333-19.206zM178.696 469.961l23.541-54.329c5.211-12.038 16.532-20.57 29.549-22.278l107.246-14.017c-26.749 38.685-50.278 75.264-69.665 106.656l-90.67-16.032zM327.665 775.17c-6.359 6.361-17.453 6.361-23.802 0l-55.011-55.011c-6.566-6.566-6.566-17.248 0-23.802l24.121-24.111 78.813 78.815-24.121 24.109zM630.669 792.236c-1.708 13.017-10.24 24.338-22.278 29.549l-54.329 23.542-16.032-90.671c31.379-19.376 67.971-42.916 106.656-69.665l-14.017 107.246zM920.528 363.909c-104.208 173.443-393.433 346.556-479.597 395.491-6.121 3.459-14.131 2.32-19.114-2.65l-21.744-21.744c-0.012-0.012-0.012-0.023-0.023-0.035l-111.002-111.002c-0.012-0.010-0.023-0.010-0.035-0.023l-21.744-21.744c-5.063-5.073-6.167-12.935-2.65-19.114 48.925-86.163 222.048-375.388 395.491-479.597 67.197-40.369 233.177-53.976 302.412-57.981 4.436 0 8.567 1.786 11.626 5.018 3.049 3.231 4.585 7.475 4.325 11.947-3.971 68.255-17.58 234.234-57.948 301.433z" />
				<path d="M732.827 173.645c-31.404 0-60.918 12.231-83.126 34.43-45.818 45.83-45.818 120.41 0 166.23 22.198 22.196 51.712 34.429 83.114 34.429 31.392 0 60.918-12.22 83.116-34.429 45.828-45.83 45.828-120.4 0-166.242-22.188-22.198-51.702-34.417-83.104-34.417zM783.765 342.116c-13.607 13.607-31.699 21.094-50.938 21.094-19.241 0-37.331-7.487-50.938-21.094-28.082-28.092-28.082-73.785 0-101.878 13.607-13.607 31.697-21.094 50.938-21.094 19.239 0 37.331 7.487 50.938 21.094 28.092 28.092 28.092 73.798 0 101.878z" />
				<path d="M134.128 764.031c-33.621 0-65.229 13.095-88.997 36.864-44.794 44.782-45.431 174.979-45.101 200.624 0.159 12.333 10.126 22.301 22.471 22.471l3.174 0.012c45.807 0 156.741-4.393 197.45-45.103 23.769-23.767 36.864-55.376 36.864-88.996 0-33.622-13.095-65.229-36.864-88.998-23.768-23.767-55.375-36.874-88.997-36.874zM190.949 946.713c-19.604 19.603-85.39 29.616-145.169 31.459 1.695-54.694 11.412-124.998 31.528-145.101 15.178-15.178 35.351-23.529 56.821-23.529s41.643 8.352 56.821 23.529c15.178 15.178 23.529 35.351 23.529 56.82s-8.352 41.644-23.529 56.822z" />
			</g>
		),
		viewboxDefault: 1024,
	},
	user: {
		path: (
			<g>
				<path d="M512.014 567.649c-156.548 0-283.881-127.332-283.881-283.823 0-156.529 127.353-283.843 283.881-283.843s283.842 127.334 283.842 283.843c0 156.51-127.314 283.823-283.842 283.823zM512.014 37.874c-135.632 0-245.99 110.32-245.99 245.952 0 135.613 110.358 245.935 245.99 245.935 135.611 0 245.95-110.322 245.95-245.935 0-135.631-110.338-245.952-245.95-245.952z" />
				<path d="M570.438 1024.001c-0.022 0-0.022 0-0.040 0l-58.39-0.076-58.39 0.076c-184.095 0-374.441 0-374.441-183.073 0-127.657 93.193-241.668 243.224-297.503l9.814-3.637 8.317 6.367c49.676 38.062 108.975 58.163 171.477 58.163 62.464 0 121.763-20.119 171.44-58.163l8.317-6.367 9.813 3.637c150.029 55.835 243.222 169.846 243.222 297.503 0 80.994-37.719 133.018-115.302 159.032-66.364 22.239-156.583 24.042-259.059 24.042zM512.007 986.033l58.43 0.076c99.083 0 186.061-1.67 247.011-22.092 61.876-20.743 89.462-58.711 89.462-123.089 0-108.784-79.819-207.035-209.030-258.342-54.544 39.046-118.579 59.601-185.874 59.601-67.333 0-131.369-20.573-185.913-59.601-129.209 51.307-209.027 149.557-209.027 258.342 0 135.386 127.144 145.181 336.55 145.181l58.39-0.076z" />
			</g>
		),
		viewboxDefault: 1024,
	},
};

export default icons;
