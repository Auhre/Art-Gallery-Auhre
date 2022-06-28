import TextArea from "./TextArea";

function HelpUs() {
    return (
        <div class="mt-40 mb-2">
            <h3 class="ml-96 mb-4 font-bold text-3xl">Please help us imporoved</h3>
            <div class="flex mx-auto relative bg-gray-100 w-full bg h-56 mb-1 rounded-xl p-2">
                <TextArea minRows={10} />
                <button class="bottom-12 right-96 absolute rounded-md h-9 bg-gray-300 w-1/12 hover:bg-black hover:text-white">Click Here</button>
            </div>
        </div>
    );
}


export default HelpUs;