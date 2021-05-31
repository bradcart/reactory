import React from "react"
import { Paper, FormControl, FormLabel, Slider } from "@material-ui/core"
import ColorPicker from 'material-ui-color-picker'
import { useNode } from "@craftjs/core"

export const Container = ({ background, padding = 0, children }) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <Paper ref={ref => connect(drag(ref))} style={{ background, padding: `${padding}px` }}>
            {children}
        </Paper>
    )
}

export const ContainerSettings = () => {
    const { background, padding, actions: { setProp } } = useNode(node => ({
        background: node.data.props.background,
        padding: node.data.props.padding
    }));
    return (
        <div>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Background</FormLabel>
                <ColorPicker defaultValue={background || '#000'} onChange={color => {
                    setProp(props => props.background = color)
                }} />
            </FormControl>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Padding</FormLabel>
                <Slider defaultValue={padding} onChange={(_, value) => setProp(props => props.padding = value)} />
            </FormControl>
        </div>
    )
}

// We export this because we'll be using this in the Card component as well
export const ContainerDefaultProps = {
    background: "#ffffff",
    padding: 3
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings
    }
}