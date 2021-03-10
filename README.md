# TypeScript

## 组合结构
https://www.typescriptlang.org/docs/handbook/utility-types.html
### Partial<Type>
构造一个类型，将Type的所有属性设置为可选。 该实用程序将返回一个表示给定类型的所有子集的类型
```javaScript
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

### Required<Type>
构造一个类型，将Type的所有属性设置为必须
```javaScript
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
//Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

### Readonly<Type>
构造一个Type的所有属性都设置为readonly的类型，这意味着无法重新分配所构造类型的属性。
```javaScript
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
//Cannot assign to 'title' because it is a read-only property.
```
### Record<Keys,Type>
构造一个对象类型，其属性键为Keys，其属性值为Type。 该实用程序可用于将一个类型的属性映射到另一个类型。
```javaScript
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;
// ^ = const cats: Record
```

### Pick<Type, Keys>
通过从Type中选择属性Keys的集合来构造类型
```javaScript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
// ^ = const todo: TodoPreview
```

### Omit<Type, Keys>
```javaScript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
// ^ = const todo: TodoPreview
```

### Exclude<Type, ExcludedUnion>
通过从Type中排除可分配给ExcludedUnion的所有联合成员来构造类型。
```javaScript
type T0 = Exclude<"a" | "b" | "c", "a">;
//    ^ = type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
//    ^ = type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
//    ^ = type T2 = string | number
```

### Extract<Type, Union>
通过从Type中提取可分配给Union的所有Union成员来构造类型。
```javaScript
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
//    ^ = type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
//    ^ = type T1 = () => void
```

### NonNullable<Type>
通过从Type中排除null和undefined来构造一个类型
```javaScript
type T0 = NonNullable<string | number | undefined>;
//    ^ = type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
//    ^ = type T1 = string[]
```