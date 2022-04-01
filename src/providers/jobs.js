import axios from "axios";

export const getJobs = async () => {
    try {
        const response = await axios.get('https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/');
        return response.data || []
    } catch (error) {
        return []
    }
}