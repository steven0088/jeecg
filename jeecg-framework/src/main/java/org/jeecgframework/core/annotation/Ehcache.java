package org.jeecgframework.core.annotation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 
 * @author  张代浩
 *
 */
@Retention(RetentionPolicy.RUNTIME)
@Target( { ElementType.METHOD })
@Documented
public @interface Ehcache {
	// 缓存名称,默认为空
	String cacheName() default "";

	// 增加缓存还是删除缓存，默认为增加缓存
	boolean addOrdel() default true;
	
	//临时缓存还是永久缓存，默认为缓存缓存
	//TODO 暂时只支持临时缓存，未实现永久缓存
	boolean eternal() default true;
}
