export interface Data {
	thumbnail: {
		src: {
			height: number;
			src: string;
			format: "avif" | "webp" | "jpg" | "jpeg" | "tiff" | "png" | "gif" | "svg";
			width: number;
		};
		alt: string;
	};
	path: string;
	title: string;
	description: string;
}
