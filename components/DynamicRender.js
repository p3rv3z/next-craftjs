import { Element, useNode, useEditor } from "@craftjs/core";

export const DynamicRender = () => {
    const { connectors: { connect, drag } } = useNode();

    const { actions, query } = useEditor((state) => ({
        currentJson: state.nodes
    }))

    const renderTemplate = () => {
        let foo = 'bar';
        const names = ['a', 'b', 'c'];
        const testLog = () => console.log('hello')

        const jsxElements = (
            <div>
                <p>{foo}</p>
                <button onClick={testLog}>click</button>
                {names.map((name) => <p key={name}>{name}</p>)}
            </div>
        )

        const nodeList = query.parseReactElement(jsxElements).toNodeTree();
        const keys = Object.keys(nodeList.nodes)

        for (let d of keys) {
			const node = nodeList.nodes[d];
			node.data.isCanvas = true
		}
        
        actions.addNodeTree(nodeList, 'ROOT');
    }

    return (
        <div>
            <button onClick={renderTemplate} style={{ background: 'red' }}>Render Template</button> 
        </div>
    )
}