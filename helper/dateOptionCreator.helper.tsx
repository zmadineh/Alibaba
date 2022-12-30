export const dateOptionCreator = () => {
    const today = new Date();
    let dateOption = [{label: today.toLocaleDateString('fa-IR'), value: today}];

    for (let i=1; i<10; ++i){
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + i)
        dateOption.push({label: tomorrow.toLocaleDateString('fa-IR'), value: tomorrow})
    }
    console.log('toggle: ', dateOption)
    return dateOption
}