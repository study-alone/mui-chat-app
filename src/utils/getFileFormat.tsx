// components
import { Image, Iconify } from '@components/common'

// ----------------------------------------------------------------------

const FORMAT_IMG = ['jpg', 'jpeg', 'gif', 'bmp', 'png']
const FORMAT_VIDEO = ['m4v', 'avi', 'mpg', 'mp4', 'webm']
const FORMAT_WORD = ['doc', 'docx']
const FORMAT_EXCEL = ['xls', 'xlsx']
const FORMAT_POWERPOINT = ['ppt', 'pptx']
const FORMAT_PDF = ['pdf']
const FORMAT_PHOTOSHOP = ['psd']
const FORMAT_ILLUSTRATOR = ['ai', 'esp']

const FILE_TYPES = {
	image: FORMAT_IMG,
	video: FORMAT_VIDEO,
	word: FORMAT_WORD,
	excel: FORMAT_EXCEL,
	powerpont: FORMAT_POWERPOINT,
	pdf: FORMAT_PDF,
	photoshop: FORMAT_PHOTOSHOP,
	illustrator: FORMAT_ILLUSTRATOR,
}

export function getFileType(fileUrl = '') {
	return (fileUrl && fileUrl.split('.').pop()) || ''
}

export function getFileName(fileUrl: string) {
	return fileUrl.substring(fileUrl.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, '')
}

export function getFileFullName(fileUrl: string) {
	return fileUrl.split('/').pop()
}

export function getFileFormat(fileUrl: string) {
	const type = getFileType(fileUrl)
	let format = ''
	Object.entries(FILE_TYPES).forEach(([key, value]) => {
		if (value.includes(type)) {
			format = key
		}
	})

	return format
}

const getIcon = (name: string) => (
	<Image src={`https://codingmonk/assets/icons/file/${name}.svg`} alt={name} sx={{ width: 28, height: 28 }} />
)

export function getFileThumb(fileUrl: string) {
	const type = getFileFormat(fileUrl)
	const thumbs: { [key: string]: JSX.Element } = {
		video: getIcon('format_video'),
		word: getIcon('format_word'),
		excel: getIcon('format_excel'),
		powerpoint: getIcon('format_powerpoint'),
		pdf: getIcon('format_pdf'),
		photoshop: getIcon('format_photoshop'),
		illustrator: getIcon('format_ai'),
		image: <Image src={fileUrl} alt={fileUrl} sx={{ height: 1 }} />,
	}
	return thumbs[type] || <Iconify icon={'eva:file-fill'} sx={{ width: 28, height: 28 }} />
}
