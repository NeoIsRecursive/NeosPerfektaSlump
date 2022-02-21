export default function load(loading){
    if (loading){
        const load = document.createElement('div');
        load.setAttribute('id','loading');
        load.classList = "w-16 h-16 border-4 border-slate-300 rounded-full border-b-4 border-b-sky-400 animate-spin mx-auto";
        document.getElementById('students').textContent = "";
        document.getElementById('students').appendChild(load);
    }
    if (!loading){
        document.getElementById('loading').remove();
    }
}
