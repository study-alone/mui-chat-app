import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'
import type { ReportHandler } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		getCLS(onPerfEntry)
		getFID(onPerfEntry)
		getFCP(onPerfEntry)
		getLCP(onPerfEntry)
		getTTFB(onPerfEntry)
	}
}

export default reportWebVitals
