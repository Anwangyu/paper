//package com.aizuda.snailjob.server.common.util.gson;
//
//import com.fasterxml.jackson.databind.JsonDeserializer;
//import com.fasterxml.jackson.databind.JsonSerializer;
//import org.apache.commons.codec.binary.Base64;
//
//import java.lang.reflect.Type;
//
//public class Base64TypeAdapter implements JsonSerializer<byte[]>, JsonDeserializer<byte[]> {
//
//    @Override
//    public JsonElement serialize(byte[] src, Type typeOfSrc, JsonSerializationContext context) {
//        return new JsonPrimitive(Base64.encodeBase64String(src));
//    }
//
//    @Override
//    public byte[] deserialize(JsonElement json, Type type, JsonDeserializationContext cxt) {
//        return Base64.decodeBase64(json.getAsString());
//    }
//}
