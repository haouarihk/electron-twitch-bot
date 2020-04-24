module.exports = class AllInOne {
    constructor() {
        this.lines = []
    }
    render() {
        let all = ""
        this.lines.forEach(line => all += line.render())
        return all
    }
}