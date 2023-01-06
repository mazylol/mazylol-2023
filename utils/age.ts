export default function () {
    const dob = new Date('09/05/2006')
    const month_diff = Date.now() - dob.getTime()
    const age_dt = new Date(month_diff)
    const year = age_dt.getUTCFullYear()
    return Math.abs(year - 1970)
}
