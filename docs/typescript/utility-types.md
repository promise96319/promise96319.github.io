# 内置类型

## Partial

将属性变为可选。

``` typescript
type Partial<T> = { 
  [P in keyof T]?: T[P] 
};
```

## Required

将属性变为必选。通过 `-` 移除修饰符 `?`。默认为 `+` 号。

```typescript
type Required<T> = { 
  [P in keyof T]-?: T[P] 
}
```

## Readonly

```typescript
type Readonly<T> = { 
  readonly [P in keyof T]: T[P] 
};
```

## Writeable

同理，使用 `-` 移除 `readonly` 修饰符。

```typescript
type Writeable<T> = { 
  -readonly [P in keyof T]: T[P] 
};
```

## Record

对象形式

```typescript
type Record<K extends keyof any, T> = { 
  [P in K]: T 
};
```

## Exclude

排除

```typescript
type Exclude<T, U> = T extends U ? never : T;
```

## Extract

选取、取出。

```typescript
type Extract<T, K> = T extends K ? T : never;
```

## Omit

排除部分属性

```typescript
type Omit<T, K extends keyof T> = Pick<T, Exclude<T, K>>
```

## Pick

选取部分属性

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

## NonNullable

排除 `null` 和 `undefined`

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

## Parameters

参数类型

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

## ReturnType

函数返回值类型

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

## ConstructorParameters

构造函数参数类型

```typescript
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
```

## InstanceType

类的实例类型

```typescript
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
```

## 内置

```typescript
// 全部大写
type Uppercase<S extends string> = intrinsic;
// 全部小写
type Lowercase<S extends string> = intrinsic;
// 首字母大写
type Capitalize<S extends string> = intrinsic;
// 首字母小写
type Uncapitalize<S extends string> = intrinsic;
```

## Equals

类型判断

```typescript
type Equals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
```

