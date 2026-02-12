import { componentMap } from "./ComponentRenderer";
export default function DynamicRenderer({ components }) {
  if (!components) return null;

  const renderComponent = (component) => {
    const { id, type, props, children } = component;

    const Component = componentMap[type];

    if (!Component) {
      return null;
    }

    return (
      <Component key={id} {...props}>
        {children && children.map(renderComponent)}
      </Component>
    );
  };

  return <>{components.map(renderComponent)}</>;
}