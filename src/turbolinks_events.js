// call this method to see debug level event data for TurboLinks
export const debugEvents = () => {
    document.addEventListener('turbolinks:load', function () {
        console.log('turbolinks:load')
    })
}
