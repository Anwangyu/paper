//package com.aizuda.snailjob.server.common.util.gson;
//
//import com.aizuda.snailjob.server.common.util.StringKit;
//import com.fasterxml.jackson.core.JacksonException;
//import com.fasterxml.jackson.core.JsonGenerator;
//import com.fasterxml.jackson.core.JsonParser;
//import com.fasterxml.jackson.databind.DeserializationContext;
//import com.fasterxml.jackson.databind.JsonDeserializer;
//import com.fasterxml.jackson.databind.JsonSerializer;
//import com.fasterxml.jackson.databind.SerializerProvider;
//
//import java.io.IOException;
//import java.lang.reflect.Type;
//
//public class ByteArrayTypeAdapter implements JsonSerializer<byte[]>, JsonDeserializer<byte[]> {
//
//
//    @Override
//    public byte[] deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
//        return StringKit.serialize(json.getAsString());
//    }
//
//    @Override
//    public void serialize(byte[] bytes, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
//        return new JsonPrimitive(StringKit.deserialize(src));
//
//    }
//}
